import react, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function UpdateProduct() {
    const [form, setForm] = useState({name: "", category: "", price: "", imageUrl: ""});
    const {id} = useParams();
    async function handleSubmit(e) {
        e.preventDefault();

        try{
            await fetch ("http://localhost:3000/api/products/" + id, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(form)
            });
            setForm({name: "", category: "", price: "", imageUrl: ""});
        }catch(err){
            console.log(err);
        }
    }

    async function getProduct(){

        try{
            const res = await fetch("http://localhost:3000/api/products/" + id, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            const data = await res.json();

            console.log(data);

            setForm({
                name: data.name || "",
                category: data.category || "",
                price: data.price || "",
                imageUrl: data.imageUrl || ""
            });
        }catch (err){
            console.log(err);
        }
    }

    useEffect(() => {
        getProduct();
    },[]);

    return(
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor = "name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value})}
                />
            </div>

            <div>
                <label htmlFor = "category">Category</label>
                <input
                    id="category"
                    type="text"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value})}
                />
            </div>

            <div>
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    type="text"
                    value={form.price}
                    onChange={(e) => ({ ...form, price: e.target.value})}
                />
            </div>

            <div>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    type="text"
                    value={form.imageUrl}
                    onChange={(e) => setForm({ ...form, imageUrl: e.target.value})}
                />
            </div>

            <button type="submit">Salvar</button>
        </form>
    )
}