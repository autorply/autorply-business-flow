
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";

const MultiChannelSection = () => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const generateImage = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.functions.invoke('generate-multi-channel-image');
      
      if (error) {
        throw new Error(error.message);
      }
      
      if (!data.success) {
        throw new Error(data.error || 'فشل في إنشاء الصورة');
      }
      
      return data.imageData;
    },
    onSuccess: (imageData) => {
      setGeneratedImage(imageData);
      toast.success("تم إنشاء الصورة بنجاح!");
    },
    onError: (error: Error) => {
      console.error('Failed to generate image:', error);
      toast.error(error.message || "فشل في إنشاء الصورة");
    },
  });

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* النص العربي */}
          <motion.div 
            className="flex-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              ادمج جميع رسائل قنواتك المتعددة في مكان واحد
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              بع، سوّق، وقدم الدعم عبر الدردشة المباشرة، واتساب، فيسبوك ماسنجر، انستغرام، تيك توك، تيليغرام والايميل للحصول على تجربة موحدة.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                onClick={() => window.open('#', '_blank')}
              >
                اقرأ المزيد
                <ExternalLink className="mr-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="px-6 py-3 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => generateImage.mutate()}
                disabled={generateImage.isPending}
              >
                {generateImage.isPending ? (
                  <>
                    <RefreshCw className="ml-2 h-5 w-5 animate-spin" />
                    جاري الإنشاء...
                  </>
                ) : (
                  <>
                    <RefreshCw className="ml-2 h-5 w-5" />
                    إنشاء صورة عربية
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          {/* الصورة */}
          <motion.div 
            className="flex-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src={generatedImage || "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"} 
                alt="منصة متعددة القنوات" 
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiChannelSection;
