"use client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";

export default function StudentMarks({ name, classId }) {
  const [groupedMarks, setGroupedMarks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMarks() {
      try {
        const res = await fetch("/api/getmarks");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Помилка запиту");

        const filteredMarks = data.marks.filter((mark) => {
          return mark.classId === classId && mark.name === name;
        });

        const grouped = {};
        filteredMarks.forEach((mark) => {
          let realDate = mark.date;
          if (mark.date && mark.date.$date?.$numberLong) {
            realDate = new Date(Number(mark.date.$date.$numberLong));
          } else {
            realDate = new Date(mark.date);
          }

          const subjectKey = mark.subjectName;
          if (!grouped[subjectKey]) grouped[subjectKey] = [];
          grouped[subjectKey].push({ ...mark, date: realDate });
        });

        setGroupedMarks(grouped);
      } catch (err) {
        console.error(err);
        setError("Помилка завантаження оцінок");
      } finally {
        setLoading(false);
      }
    }

    fetchMarks();
  }, [name, classId]);

  if (loading) {
    return (
      <div className="space-y-4 p-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-24 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) return <p className="text-red-600 p-4">{error}</p>;

  return (
    <div className="p-4">
      {Object.keys(groupedMarks).length === 0 ? (
        <p>Оцінок не знайдено.</p>
      ) : (
        <div className="space-y-4">
          {Object.entries(groupedMarks).map(([subjectName, marks]) => (
            <Card key={subjectName} className="shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-xl font-bold text-[#15481F] mb-2">
                  {subjectName}
                </h2>
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value={`${subjectName}-accordion`}>
                    <AccordionTrigger>Переглянути оцінки</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {marks.map((mark) => (
                          <Card key={mark._id}>
                            <CardContent className="p-4 space-y-2">
                              <div className="text-sm text-muted-foreground">
                                <strong>Дата:</strong>{" "}
                                {mark.date.toLocaleDateString("uk-UA")}
                              </div>
                              <div>
                                <strong>Оцінка: </strong>
                                <Badge 
                                  variant="secondary"
                                  className="text-lg px-3 py-1 bg-[#15481F] text-white"
                                >
                                  {mark.mark}
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
