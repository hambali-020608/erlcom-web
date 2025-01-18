export default function Footer(){
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <img src="/images/logo/Erl.png" alt="" width={60} className="-ms-2"/>
    <p>
      Erl Com
      <br />
      Providing reliable course since 2023
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">Tentang Kami</a>
    <a className="link link-hover">Contact</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    )
}