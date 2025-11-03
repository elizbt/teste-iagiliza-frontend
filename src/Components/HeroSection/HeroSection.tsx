import Image from "next/image"

export default function HeroSection () {
    return (
        <section className="bg-[#8093F1] w-full min-h-screen flex flex-col pt-20">

            <div className=" flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-10">
                
                <div className="lg:flex-1 text-white">
                    <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl mb-8">
                        Automatize seu atendimento com a IA que realmente entende seu cliente
                    </h1>
                    <p className="text-lg mb-8 font-medium">
                        Nosso chatbot inteligente aprende com suas interações e resolve problemas 24/7, para que você possa focar no crescimento do seu negócio
                    </p>

                    <a href="#" className="bg-white text-[#8093F1] px-6 py-3 rounded-full font-bold hover:bg-[#5C66C0]  hover:text-white transition">
                    Começar Agora
                    </a>
                </div>
                
                <div className="w-full lg:flex-1">
                    <Image
                        src="/heroImg.jpg"
                        alt="Homem trabalhando no computador"
                        className="rounded-xl shadow-lg w-full h-auto"
                        width={580}
                        height={480}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}