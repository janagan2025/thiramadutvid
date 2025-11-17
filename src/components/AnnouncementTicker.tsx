import { Megaphone } from "lucide-react";

const AnnouncementTicker = () => {
  const announcements = [
    "Annual Day celebration on December 20th, 2024",
    "Parent-Teacher meeting scheduled for next Monday",
    "Sports Day registrations now open",
    "Library will remain closed on Saturday for maintenance",
    "New computer lab opening ceremony on Friday",
    "School will be closed for public holiday on Monday",
  ];
  
  return (
    <div className="bg-primary text-primary-foreground py-4 overflow-hidden sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Megaphone className="w-5 h-5 animate-pulse" />
            <span className="font-semibold">Announcements:</span>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-8 animate-scroll-left">
              {/* Duplicate announcements for seamless loop */}
              {[...announcements, ...announcements].map((announcement, index) => (
                <span key={index} className="whitespace-nowrap">
                  {announcement}
                  <span className="mx-8 text-primary-foreground/50">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
