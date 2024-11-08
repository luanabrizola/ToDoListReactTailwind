function Lista() {

    return(

        <div className="flex flex-col gap-6">

          <header className="flex flex-1 justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-azul">
              <p className="text-sm">Tarefas criadas</p>
              <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
                2
              </span>
            </div>
            <div className="flex items-center gap-2 font-bold text-roxo">
              <p className="text-sm">Concluídas</p>
              <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
                1 de 2
              </span>
            </div>
          </header>
        </div>
        
    )

}

export default Lista;