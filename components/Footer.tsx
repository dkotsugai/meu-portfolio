export default function Footer() {
    return (
      <footer className="w-full bg-neutral-900 text-gray-200 border-t border-gray-700 py-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
          
          {/* Colunas de informações */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Telefone */}
            <div>
              <h3 className="text-white font-semibold">Telefone</h3>
              <p className="text-sm mt-1">(12) 98230-3841</p>
            </div>
  
            {/* Email */}
            <div>
              <h3 className="text-white font-semibold">Email</h3>
              <p className="text-sm mt-1">dkotsugai@gmail.com</p>
            </div>
  
            {/* Links de redes sociais */}
            <div>
              <h3 className="text-white font-semibold">Me siga</h3>
              <ul className="space-y-1 mt-1">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/..." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Políticas e Copyright */}
          <div className="space-y-1 text-sm">
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="hover:text-yellow-400"
              >
                Política de Cookies
              </a>
              <a 
                href="#" 
                className="hover:text-yellow-400"
              >
                Política de Privacidade
              </a>
            </div>
  
            <p className="text-gray-400 mt-2">
              © 2035 Por Daniel. <br className="md:hidden" />
              Orgulhosamente criado com Next.js.
            </p>
          </div>
        </div>
      </footer>
    );
  }