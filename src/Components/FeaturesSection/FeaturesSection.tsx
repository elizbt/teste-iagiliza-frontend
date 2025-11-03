

export function Features () {
    return (
        <section id="features" className="bg-[#F8FAFC] py-16">

            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">Tudo que você precisa, e mais!</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4  px-10 items-stretch">

                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start md:items-center min-h-[260px]">
                    <h3 className="text-lg font-semibold text-gray-900 text-left md:text-center mb-5">
                        Compreensão Avançada
                    </h3>
                    <ul className="text-gray-600 list-inside space-y-4 text-sm text-left md:text-center">
                        <li>Entende intenções, não só palavras</li>
                        <li>Mantém contexto em longos diálogos</li>
                        <li>Respostas fluídas, precisas e naturais</li>
                    </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start md:items-center min-h-[260px]">
                    <h3 className="text-lg font-semibold text-gray-900 text-left md:text-center mb-5">
                        Assistente Proativo
                    </h3>
                    <ul className="text-gray-600 list-inside space-y-4 text-sm text-left md:text-center">
                        <li>Resolve problemas de suporte 24/7</li>
                        <li>Qualifica leads em tempo real</li>
                        <li>Automatiza agendamentos e tarefas repetitivas</li>
                    </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start md:items-center min-h-[260px]">
                    <h3 className="text-lg font-semibold text-gray-900 text-left md:text-center mb-5">
                        Conhecimento Personalizado
                    </h3>
                    <ul className="text-gray-600 list-inside space-y-4 text-sm text-left md:text-center">
                        <li>Integrado aos seus documentos, FAQs e APIs</li>
                        <li>Respostas 100% alinhadas ao seu negócio</li>
                        <li>Fornece respostas precisas e confiáveis</li>
                    </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start md:items-center min-h-[260px]">
                    <h3 className="text-lg font-semibold text-gray-900 text-left md:text-center mb-5">
                        Entenda Seus Clientes
                    </h3>
                    <ul className="text-gray-600 list-inside space-y-4 text-sm text-left md:text-center">
                        <li>Veja quais são as dúvidas mais comuns</li>
                        <li>Descubra o que as pessoas mais procuram</li>
                        <li>Receba relatórios fáceis de entender</li>
                    </ul>
                </div>

            </div>

        </section>
    )
}