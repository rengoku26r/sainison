import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-farm.jpg";
import machineryImage from "@/assets/farm-machinery.jpg";
import growthImage from "@/assets/soil-growth.jpg";

// Easy to manage gallery - simply add or remove items from this array
const galleryImages = [
  {
    id: 1,
    src: heroImage,
    alt: "Modern tractor working in the field",
    title: "Modern Farming Equipment",
  },
  {
    id: 2,
    src: machineryImage,
    alt: "Agricultural machinery at work",
    title: "Advanced Machinery",
  },
  {
    id: 3,
    src: growthImage,
    alt: "Fertile soil and growth",
    title: "Quality Soil Management",
  },
  // Add more images here as needed
  // Example:
  // {
  //   id: 4,
  //   src: "/path/to/your/image.jpg",
  //   alt: "Description of the image",
  //   title: "Image Title",
  // },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our modern agricultural operations, machinery, and the farms we've helped transform
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={image.id}
                className="group cursor-pointer overflow-hidden border-2 hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {galleryImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Gallery images coming soon. Check back later!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200 mt-2">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Instructions for Easy Updates */}
      {/* <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="p-6 max-w-2xl mx-auto bg-card border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              💡 Easy Gallery Management
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              To add, remove, or update gallery images, simply edit the <code className="bg-muted px-2 py-1 rounded">galleryImages</code> array 
              in the Gallery component file (<code className="bg-muted px-2 py-1 rounded">src/pages/Gallery.tsx</code>).
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Add images:</strong> Add new objects to the array with id, src, alt, and title</li>
              <li>• <strong>Remove images:</strong> Delete the corresponding object from the array</li>
              <li>• <strong>Update images:</strong> Change the src path or other properties</li>
              <li>• <strong>No limit:</strong> Add as many images as you need</li>
            </ul>
          </Card>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Gallery;
