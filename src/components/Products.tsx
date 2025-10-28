import { IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import brustCutter from "@/assets/brush-cutter.jpg";
import lawnMover from "@/assets/lawn-mover.jpg";
import hedgeTrimmer from "@/assets/hedge-trimmer.jpg";
import chainSaw from "@/assets/chain-saw.jpg";
import brassSprinkler from "@/assets/brass-sprinkler.webp";
import powerTriller from "@/assets/power-tiller.webp";
import earthAuger from "@/assets/earth-auger.webp";
import powerReaper from "@/assets/power-reaper.webp";

const products = [
  {
    id: 1,
    name: "Brush Cutter",
    description: "Our range of products include Brush Cutter With Multi Attachments, 1400 W Electric Brush Cutter, 2 Stroke Petrol Brush Cutter, Lawn Mower Electric, Shoulder Brush Cutter and KAE Petrol Brush Cutter.",
    image: brustCutter,
    url: "https://www.indiamart.com/kshetragna-agri-engitech/brush-cutter.html"
  },
  {
    id: 2,
    name: "Lawn Mover",
    description: "Manufacturer of a wide range of products which include KAE-18 2250 Watt Electric Lawn Mower, KAE-15 1600 W Electric Lawn Mower, KAE- 16 2250 W Electric Lawn Mower, Kae 21 Electric Lawn Mower, KAE - Lawn Mowers and Lawn Mowers KAE 15.",
    image: lawnMover,
    url: "https://www.indiamart.com/kshetragna-agri-engitech/lawn-mower.html"

  },
  {
    id: 3,
    name: "Hedge Trimmer",
    description: "We are a leading Manufacturer of KAE Petrol Hedge Trimmer, Chain Saw Machine, 500 W Electric Hedge Trimmer and Gehu Cutting Machine from Ahmedabad, India.",
    image: hedgeTrimmer,
    url: "https://www.indiamart.com/kshetragna-agri-engitech/hedge-trimmer.html"
  },
  {
    id: 4,
    name: "Petrol Chain Saw",
    description: "Offering you a complete choice of products which include 62CC 2 Stroke Petrol Chain Saw, 58CC 2 Stroke Petrol Chain Saw and Petrol Chain Saw.",
    image: chainSaw,
    url: "https://www.indiamart.com/kshetragna-agri-engitech/petrol-chain-saw.html"

  },
  {
    id: 5,
    name: "Heavy Duty Sprinkler",
    description: "Our range of products include Heavy Duty Brass Impact Sprinkler and Brass Impact Sprinkler.",
    image: brassSprinkler,
    url: "https://www.indiamart.com/kshetragna-agri-engitech/heavy-duty-brass-impact-sprinkler.html"

  },
  {
    id: 6,
    name: "Power Tiller and Weeder",
    description: "Our range of products include 9 HP Petrol Power Weeder and 5 HP Mini Power Tiller.",
    image: powerTriller,
    url: "https://www.indiamart.com/kshetragna-agri-engitech/power-tiller-and-weeder.html"
  },
  {
    id: 7,
    name: "Garden Hand Tools",
    description: "Leading Manufacturer of Tree Cutter Machine, Garden Tool Set, Earth Auger Machine, Garden Hand Tools and Garden Hand Cultivators from Ahmedabad.",
    image: earthAuger,
    url: "https://www.indiamart.com/kshetragna-agri-engitech/garden-hand-tools.html"
  },
  {
    id: 8,
    name: "Power Reaper",
    description: "Providing you the best range of 9 HP Petrol Crop Harvesting Reaper and 7 HP Petrol Crop Harvesting Reaper with effective & timely delivery.",
    image: powerReaper,
    url: "https://www.indiamart.com/kshetragna-agri-engitech/power-reaper.html"
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Our Equipment
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Premium quality agricultural equipment for modern farming
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <a
                  href={product.url}
                  target="_blank"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  Get More Info →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
