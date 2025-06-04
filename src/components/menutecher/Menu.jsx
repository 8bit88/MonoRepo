"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"];

const TeacherMenuView = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getmenu")
      .then((res) => res.json())
      .then((data) => {
        if (data.menus) {
          setMenus(data.menus);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center text-lg">Завантаження...</p>;

  if (!menus.length)
    return (
      <p className="text-center text-lg">
        Меню ще не вибрано жодним користувачем.
      </p>
    );

  const groupedMenus = daysOfWeek.map((day, index) => {
    const filtered = menus
      .filter((item) => item.sheetIndex === index)
      .sort((a, b) => a.classId.localeCompare(b.classId));

    const classSummary = {};

    filtered.forEach((item) => {
      const cls = item.classId;
      if (!classSummary[cls]) {
        classSummary[cls] = {
          first: {},
          second: {},
          snack: {},
        };
      }

      ["first", "second", "snack"].forEach((key) => {
        const dish = item[key];
        if (dish) {
          classSummary[cls][key][dish] =
            (classSummary[cls][key][dish] || 0) + 1;
        }
      });
    });

    return { day, menus: filtered, classSummary };
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {groupedMenus.map(({ day, menus, classSummary }) => (
        <Card key={day} className="shadow-lg">
          <CardHeader>
            <CardTitle>{day}</CardTitle>
          </CardHeader>
          <CardContent>
            {menus.length ? (
              <>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ім’я</TableHead>
                      <TableHead>Клас</TableHead>
                      <TableHead>Перша страва</TableHead>
                      <TableHead>Основна страва</TableHead>
                      <TableHead>Підвечірок</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {menus.map((item) => (
                      <TableRow key={item._id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.classId}</TableCell>
                        <TableCell>{item.first}</TableCell>
                        <TableCell>{item.second}</TableCell>
                        <TableCell>{item.snack}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-6 space-y-6">
                  <h4 className="text-ms font-medium">Вибір по класах:</h4>
                  {Object.entries(classSummary).map(([classId, summary]) => (
                    <div key={classId}>
                      <h5 className="text-md font-regular mb-2">
                        Клас {classId}
                      </h5>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Страва</TableHead>
                            <TableHead>Кількість</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {["first", "second", "snack"].map((key) =>
                            Object.entries(summary[key]).map(
                              ([dish, count]) => (
                                <TableRow key={`${key}-${dish}`}>
                                  <TableCell>{dish}</TableCell>
                                  <TableCell>{count}</TableCell>
                                </TableRow>
                              )
                            )
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-muted-foreground">Жодного меню на цей день.</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TeacherMenuView;
