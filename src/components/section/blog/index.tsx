import Card from "./card";

export default function Blog() {
    return(
        <section className="mt-32 mx-10 mb-28 min-h-[80vh]" id="blog section">
            <div className="container ">
            <h1 className="text-3xl mb-5 ">News Update</h1>
            <div className="grid grid-cols-4 justify-center gap-4 mt-10">
                <Card title="Blog 1"/>
                <Card title="Blog 2"/>
                <Card title="Blog 3"/>
                <Card title="Blog 4"/>

                </div>
            

            </div>
        </section>
    )
    
}