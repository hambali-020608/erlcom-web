export default function Header() {
    return (
        <header className="bg-sky-500 text-white py-2 flex justify-between items-center px-4">
                        <div className="flex items-center space-x-4">
                            <span>Info</span>
                            <span><i className="fas fa-phone-alt"></i> 081332428433</span>
                            <span><i className="fas fa-phone-alt"></i> 081333106528</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                        </div>
                    </header>
    )
    
}