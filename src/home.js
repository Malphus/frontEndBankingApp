import Card from "./card";

export default function Home(){
    return (
        <Card
            bgcolor="primary"
            txtcolor="white"
            header="Front End Bank"
            title="Welcome to the Bank"
            text="For all your banking needs."
            body={(<img src="bank.png" className="img-fluid" alt="Bank"/>)}
        />
    );
}