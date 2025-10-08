import react, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
 

export default function UpdateUser(){
    const [form, setForm] = useState({name: "", email: "", cpf: ""});
    const { id } = useParams();
    async function handleSubmit(e){
        e.preventDefault();

        try{
            await fetch("https://node-api-beige-gamma.vercel.app/api/users/" + id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" }, 
                body:JSON.stringify(form),
            });

            setForm({name: "", email: "", cpf: ""});
        } catch (err){
            console.log(err);
        }
    }

    async function getUser(){

        try{
            const res = await fetch("https://node-api-beige-gamma.vercel.app/api/users/"+ id, { 
                method: "GET",
                headers: { "Content-Type": "application/json" }, 
            });
            const data = await res.json(); // parse JSON

            console.log(data);

            setForm({
                name: data.name || "",
                email: data.email || "",
                cpf: data.cpf || "",
            });
        } catch (err){
            console.log(err);
        }
    }

    useEffect(()=>{ 
        getUser();
    },[]);

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor ="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e)  => setForm({ ...form, name: e.target.value})}
                />
            </div>

            <div>
                <label htmlFor="cpf">CPF</label>
                <input
                    id="cpf"
                    type="text"
                    value={form.cpf}
                    onChange={(e) => setForm({ ...form, cpf: e.target.value})}
                />
            </div>

             <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value})}
                />
            </div>

            <button type="submit">Editar</button>
        </form>
    )
}
