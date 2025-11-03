import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "O AgiliChat transformou nosso atendimento! Respostas rápidas e precisas que impressionaram nossos clientes. Essencial!",
      name: "Maria Silva",
      role: "CEO, Startup X",
      image: "/mariaIcone.jpg",
    },
    {
      text: "A eficiência que o AgiliChat trouxe ao nosso suporte é inigualável. Reduzimos custos e aumentamos a satisfação!",
      name: "João Pedro",
      role: "Gerente de Suporte, Grande Empresa",
      image: "/joao.jpg",
    },
    {
      text: "Nosso workflow melhorou drasticamente com o AgiliChat. Clientes mais felizes e nossa equipe mais produtiva. Recomendamos!",
      name: "Ana Paula",
      role: "Diretora de Operações, Consultoria Z",
      image: "/ana.jpg",
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          O que nossos clientes dizem:
        </h2>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#F8FAFC] text-gray-900 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-between min-h-[200px] relative"
            >
            
              <div className="absolute -top-6 w-12 h-12 flex items-center justify-center rounded-full">
                <FaQuoteLeft size={24} className="text-[#8093F1]" />
              </div>

              <p className="text-sm text-gray-800 mt-6 mb-6 text-center leading-relaxed">
                {t.text}
              </p>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start items-center mt-auto pt-4 border-t border-gray-300 w-full">
                
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 lg:mb-0 lg:mr-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="object-cover w-full h-full"
                  />
                </div>
               
                <div className="flex flex-col items-center lg:items-start">
                  <p className="font-semibold text-sm text-blue-700">{t.name}</p>
                  <p className="text-xs text-gray-700">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
