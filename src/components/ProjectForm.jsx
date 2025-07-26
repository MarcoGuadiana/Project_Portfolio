import { useState } from 'react'

    function ProjectForm({onAdd}) {
        const [title, setTitle] = useState("")
        const [Desc, setDesc] = useState("")

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!title.trim()) return;

            onAdd({ title, Desc});
            setTitle('');
            setDesc('');
        }
        return(
            <form onSubmit={handleSubmit}>
                <input placeholder = "Title" value={title} onChange={(e) => setTitle(e.target.value)}
                />
                <textarea 
                placeholder="Description"
                value={Desc}
                onChange={(e)=> setDesc(e.target.value )}
                /> 
                <button type="submit">Add</button>

            </form>
            
        );
    }

   
    export default ProjectForm; 

    