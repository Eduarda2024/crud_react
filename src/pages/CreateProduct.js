import React, {useState} from "react";

export default function CreateProduct(){
    const [form, setForm] = useState({name: "", category: "", price: "", code:"", imageUrl:""});

    async function handleSubmit(e){
        e.preventDefault();

        try{
            await fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form),
            }),

            setForm({ name: "", category: "", price: "", code: "", imageUrl:""});
        } catch(err){
            console.log(err);
        }
    }

    return(
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
                <label htmlFor="category">Category</label>
                <input
                    id="category"
                    type="text"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                />
            </div>

            <div>
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    type="text"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value})}
                />
            </div>

            <div>
                <label htmlFor ="code">Code</label>
                <input
                    id="code"
                    type="text"
                    value={form.code}
                    onChange={(e) => setForm({ ...form, code: e.target.value})}
                />
            </div>
           
            <div>
                <label htmlFor ="image">Image</label>
                <input
                    id="image"
                    type="text"
                    value={form.imageUrl}
                    onChange={(e) => setForm({ ...form, imageUrl: e.target.value})}
                />
            </div>

            <button type="submit">Create</button>

        </form>

    )
}// criar a tela de listagem de produtos. Nao usar tabelas, fazer em estilo cards (como nos sites de compas), user list