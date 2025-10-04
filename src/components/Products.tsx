import { useState } from "react";
import { X, IndianRupee } from "lucide-react";
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
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="products" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Our Equipment
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Premium quality agricultural equipment for modern farming
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-1 text-2xl font-bold text-primary">
                  <IndianRupee className="w-5 h-5" />
                  <span>{product.price}</span>
                  <span className="text-sm text-muted-foreground font-normal">/{product.unit}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedProduct(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full bg-card rounded-3xl overflow-hidden animate-scale-in">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  {selectedProduct.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="flex items-center gap-2 text-4xl font-bold text-primary">
                  <IndianRupee className="w-8 h-8" />
                  <span>{selectedProduct.price}</span>
                  <span className="text-lg text-muted-foreground font-normal">
                    /{selectedProduct.unit}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
