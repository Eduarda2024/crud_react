import React, {useState} from "react";



export default function CreateUser(){
    const [form, setForm] = useState({name: "", email: "", cpf: ""}); // valores iniciais 

    async function handleSubmit(e){
        e.preventDefault(); // previne atualizar a pagina, pq se recarregar apaga todas as informacoes

        try{
            await fetch("http://localhost:3000/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            setForm({ name: "", email: "", cpf: ""});
        } catch (err){
            console.log(err);
        }
    }

    return (
        <form onSubmit ={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
            </div>

            <div>
                <label htmlFor="cpf">CPF</label>
                <input
                    id="cpf"
                    type="text"
                    value={form.cpf}
                    onChange={(e) => setForm({ ...form, cpf: e.target.value })}
                />
            </div>

            <button type="submit">Enviar</button>
        </form>
    )

}
