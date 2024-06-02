import { FormFields } from "@/components/ui/form-fields";
import { Button } from "@mui/material";

const Bob = () => {

    async function temp() {
        const res = await fetch('/api/mailjet', {
            method: 'POST',
            body: JSON.stringify({foo: 'bar'}),
        });

        const v = await res.json();

        if (res.status === 500) {
            console.warn(v)
        }

        if (res.status === 200) {
            alert('Success');
        }
    }

    return (
        <>
            <Button onClick={temp}>Bob</Button>
            <FormFields/>
        </>
    )
}

export default Bob;