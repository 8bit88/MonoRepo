"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Separator } from "../../ui/separator";
import { ScrollArea } from "../../ui/scroll-area";

const ScheduleTable = ({ classId }) => {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await fetch(`/api/schedule?classId=${classId}`);
        if (!res.ok) {
          throw new Error("Не вдалося завантажити розклад");
        }
        const data = await res.json();
        setSchedule(data.schedule);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (classId) {
      fetchSchedule();
    } else {
      setLoading(false);
      setError("Не передано classId");
    }
  }, [classId]);

  if (loading)
    return (
      <p className="text-muted-foreground text-center">
        Завантаження розкладу...
      </p>
    );
  if (error)
    return <p className="text-red-500 text-center">Помилка: {error}</p>;
  if (!schedule || schedule.length === 0)
    return (
      <p className="text-muted-foreground text-center">Розклад не знайдено</p>
    );

  return (
    <ScrollArea className="max-h-[80vh] p-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {schedule.week.map((day, idx) => (
          <Card key={idx} className="shadow-md">
            <CardHeader className="font-bold text-lg text-primary">
              {day.day}
            </CardHeader>
            <CardContent className="space-y-4">
              {day.subjects.map((lesson, i) => (
                <div key={i} className="p-2 border rounded-md space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{lesson.subject}</span>
                    <Badge variant="outline">{lesson.class}</Badge>
                  </div>
                  <Separator />
                  <div className="text-sm text-muted-foreground">
                    {lesson.time}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ScheduleTable;
