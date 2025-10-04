import { useState } from "react";
import { X, IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import productVegetables from "@/assets/product-vegetables.jpg";
import productWheat from "@/assets/product-wheat.jpg";
import productRice from "@/assets/product-rice.jpg";
import productPulses from "@/assets/product-pulses.jpg";

const products = [
  {
    id: 1,
    name: "Fresh Organic Vegetables",
    description: "Farm-fresh organic vegetables grown without pesticides. Includes tomatoes, carrots, leafy greens, and seasonal produce.",
    price: 150,
    unit: "per kg",
    image: productVegetables,
  },
  {
    id: 2,
    name: "Premium Golden Wheat",
    description: "High-quality wheat grains perfect for making flour. Rich in nutrients and freshly harvested from our farms.",
    price: 30,
    unit: "per kg",
    image: productWheat,
  },
  {
    id: 3,
    name: "Organic Basmati Rice",
    description: "Aromatic basmati rice with long grains. Naturally grown using traditional farming methods for authentic taste.",
    price: 80,
    unit: "per kg",
    image: productRice,
  },
  {
    id: 4,
    name: "Mixed Pulses & Lentils",
    description: "Variety pack of pulses including toor dal, moong dal, masoor dal, and chana. Rich in protein and essential nutrients.",
    price: 120,
    unit: "per kg",
    image: productPulses,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
