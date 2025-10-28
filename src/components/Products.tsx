import { IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import equipmentTractor from "@/assets/equipment-tractor-1.jpg";
import equipmentRotavator from "@/assets/equipment-rotavator.jpg";
import equipmentCultivator from "@/assets/equipment-cultivator-1.jpg";
import equipmentSeeder from "@/assets/equipment-seeder.jpg";
import equipmentHarrow from "@/assets/equipment-harrow.jpg";
import equipmentSprayer from "@/assets/equipment-sprayer.jpg";

const products = [
  {
    id: 1,
    name: "Tractor with Attachment",
    description: "Modern agricultural tractor with versatile attachments. Perfect for plowing, tilling, and various farming operations. Powerful and fuel-efficient for daily farm work.",
    price: 45000,
    unit: "per unit",
    image: equipmentTractor,
  },
  {
    id: 2,
    name: "Rotavator",
    description: "Heavy-duty rotavator for soil preparation. Features sharp blades for efficient tilling and mixing of soil. Ideal for preparing fields for sowing and improving soil structure.",
    price: 35000,
    unit: "per unit",
    image: equipmentRotavator,
  },
  {
    id: 3,
    name: "Cultivator",
    description: "Multi-purpose cultivator for seedbed preparation and weed control. Adjustable depth settings and robust construction. Essential tool for modern farming operations.",
    price: 28000,
    unit: "per unit",
    image: equipmentCultivator,
  },
  {
    id: 4,
    name: "Seed Drill Planter",
    description: "Precision seed drill for uniform seed placement. Adjustable row spacing and seed metering system. Ensures optimal crop spacing and reduces seed wastage.",
    price: 32000,
    unit: "per unit",
    image: equipmentSeeder,
  },
  {
    id: 5,
    name: "Disc Harrow",
    description: "Heavy-duty disc harrow for breaking up soil clods and leveling fields. Multiple disc configuration for thorough soil preparation. Durable construction for long-lasting performance.",
    price: 40000,
    unit: "per unit",
    image: equipmentHarrow,
  },
  {
    id: 6,
    name: "Agricultural Sprayer",
    description: "High-efficiency sprayer pump for pesticide and fertilizer application. Adjustable nozzles and pressure settings. Large tank capacity for covering extensive farm areas.",
    price: 18000,
    unit: "per unit",
    image: equipmentSprayer,
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
                  href="#"
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
