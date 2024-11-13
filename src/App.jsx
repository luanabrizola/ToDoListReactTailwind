import { useState } from "react";
import { Check, Trash } from "@phosphor-icons/react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function handleAdicionarTarefa() {
    const tarefa = { id: Date.now(), texto: novaTarefa, concluida: false };
    setTarefas([...tarefas, tarefa]);
    setNovaTarefa("");
  }

  function handleAlternarTarefaConcluida(tarefaId) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === tarefaId ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  }

  function deletarTarefa(tarefaId) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== tarefaId));
  }

  return (
    <div 
      className="
        min-h-screen w-screen
        bg-cinza-600 text-cinza-100 antialiased
      "
    >
      <header className="flex flex-1 justify-center items-center py-20 px-3 bg-neutral-900">
        <img src="/logo.svg" alt="" />
      </header>

      <section className="w-full max-w-3xl m-auto ">
        
        <div className="flex justify-between items-center gap-2 -translate-y-2/4">
          <input 
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            className="
              bg-cinza-500 text-cinza-100
              border-[1px] border-cinza-700 rounded-md
              h-12 p-4 leading-normal outline-none
              w-full
            "  
          />
          <button 
            onClick={handleAdicionarTarefa}
            className="
              flex justify-center items-center
              h-12 p-4
              bg-azul-dark text-cinza-100
              hover:bg-azul
              border-0 rounded-md
              font-bold text-sm
              transition-all
            "
          >
            Criar
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <header className="flex flex-1 justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-azul">
              <p className="text-sm">Tarefas criadas</p>
              <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
                {tarefas.length}
              </span>
            </div>
            <div className="flex items-center gap-2 font-bold text-roxo">
              <p className="text-sm">Concluídas</p>
              <span className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
                {tarefas.filter(tarefa => tarefa.concluida).length} de {tarefas.length}
              </span>
            </div>
          </header>

          <div className="flex flex-col gap-3">
            {tarefas.map((tarefa) => (
              <div key={tarefa.id} className="flex flex-1 justify-between items-center gap-3 p-4 rounded-lg bg-cinza-500 border-[1px] border-cinza-400">
                <div className="flex">
                  <label className="flex items-center gap-3 p-1">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={tarefa.concluida}
                      onChange={() => handleAlternarTarefaConcluida(tarefa.id)}
                    />
                    <span 
                      className={`
                        rounded-full w-4 h-4 flex items-center justify-center 
                        border-2 ${tarefa.concluida ? 'border-roxo-dark bg-roxo-dark' : 'border-blue-500 hover:border-blue-300'}
                      `}
                    >
                      {tarefa.concluida && <Check />}
                    </span>
                    <p className={tarefa.concluida ? "text-cinza-300 line-through" : ""}>
                      {tarefa.texto}
                    </p>
                  </label>
                </div>
                <button onClick={() => deletarTarefa(tarefa.id)}>
                  <Trash className="text-cinza-300 hover:text-danger"/>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
