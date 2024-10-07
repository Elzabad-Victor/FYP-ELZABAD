import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }) // Adjust delay as needed
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-4xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-[200px]">
        <CarouselItem className="p-4 flex items-center justify-center">
          <Card className="w-[700px] h-full flex flex-col justify-between">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="text-center">
                <div className="text-xl font-semibold text-black mb-2">Jane Doe</div>
                <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-800">
                  "EventFusion made planning our conference a breeze. The vendor recommendations and logistics tools were incredibly helpful!"
                </p>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="p-4 flex items-center justify-center">
          <Card className="w-[700px] h-full flex flex-col justify-between">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="text-center">
                <div className="text-xl font-semibold text-black mb-2">John Smith</div>
                <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-800">
                  "The ease of managing our wedding plans with EventFusion was unmatched. Highly recommend for any event planner!"
                </p>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="p-4 flex items-center justify-center">
          <Card className="w-[700px] h-full flex flex-col justify-between">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="text-center">
                <div className="text-xl font-semibold text-black mb-2">Emily Johnson</div>
                <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-800">
                  "From start to finish, EventFusion was an invaluable tool for our charity event. The support was fantastic!"
                </p>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
