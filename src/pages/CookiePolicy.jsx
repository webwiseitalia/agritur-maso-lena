import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Phone, Mail, ShieldCheck, AlertCircle } from 'lucide-react'
import { SITE, CONTACT, ADDRESS, LEGAL } from '../constants/siteData'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream-100)' }}>
      {/* Header */}
      <div style={{ background: 'var(--wood-900)' }} className="pt-28 pb-12 px-5 md:px-10 lg:px-16">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest mb-6">
          <ArrowLeft className="w-3.5 h-3.5" /> Torna alla Home
        </Link>
        <h1 className="font-serif fluid-h2 text-white">Cookie Policy</h1>
        <p className="text-white/50 text-sm mt-2">Informativa sull'utilizzo dei cookie</p>
      </div>

      {/* Content */}
      <div className="px-5 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-14 shadow-sm">
          <p className="text-wood-400 text-xs mb-8">Ultimo aggiornamento: {LEGAL.lastUpdate}</p>

          {/* Privacy-friendly badge */}
          <div className="border border-green-300 bg-green-50 p-5 mb-10 flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-green-600 shrink-0" />
            <div>
              <p className="font-medium text-green-800 mb-1">Sito Privacy-Friendly</p>
              <p className="text-green-700 text-sm leading-relaxed">
                Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie
                di profilazione, tracciamento o analisi.</strong> La tua privacy è protetta e non serve il tuo consenso per
                la navigazione.
              </p>
            </div>
          </div>

          {/* 1. Cosa sono */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">1. Cosa sono i Cookie</h2>
          <p className="text-wood-500 leading-relaxed mb-10">
            I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone)
            quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune
            informazioni sulle tue preferenze o azioni passate.
          </p>

          {/* 2. Tipologie */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">2. Tipologie di Cookie</h2>

          <h3 className="font-medium text-wood-700 mb-3">2.1 Cookie Tecnici</h3>
          <p className="text-wood-500 leading-relaxed mb-3">
            Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza
            questi cookie, il sito potrebbe non funzionare correttamente.
          </p>
          <div className="border-l-4 border-wood-400 bg-wood-50 p-4 mb-5">
            <p className="text-wood-600 text-sm font-medium mb-2">Cookie tecnici utilizzati su questo sito:</p>
            <ul className="list-disc list-inside text-wood-500 text-sm space-y-1">
              <li>Cookie di navigazione e di sessione</li>
              <li>Cookie per memorizzare la preferenza dell'interfaccia</li>
            </ul>
            <p className="text-wood-400 text-xs mt-3 italic">Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.</p>
          </div>

          <h3 className="font-medium text-wood-700 mb-3">2.2 Cookie Analitici</h3>
          <div className="flex items-center gap-3 border border-red-200 bg-red-50 p-4 mb-5">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
            <div>
              <p className="text-red-700 text-sm font-medium">NON UTILIZZATI</p>
              <p className="text-red-600 text-xs">Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.</p>
            </div>
          </div>

          <h3 className="font-medium text-wood-700 mb-3">2.3 Cookie di Profilazione</h3>
          <div className="flex items-center gap-3 border border-red-200 bg-red-50 p-4 mb-5">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
            <div>
              <p className="text-red-700 text-sm font-medium">NON UTILIZZATI</p>
              <p className="text-red-600 text-xs">Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.</p>
            </div>
          </div>

          <h3 className="font-medium text-wood-700 mb-3">2.4 Cookie di Terze Parti</h3>
          <div className="flex items-center gap-3 border border-red-200 bg-red-50 p-4 mb-10">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
            <div>
              <p className="text-red-700 text-sm font-medium">NON UTILIZZATI</p>
              <p className="text-red-600 text-xs">Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).</p>
            </div>
          </div>

          {/* 3. Cookie utilizzati */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">3. Cookie Utilizzati su Questo Sito</h2>
          <p className="text-wood-500 leading-relaxed mb-4">Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:</p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border border-wood-200">
              <thead>
                <tr style={{ background: 'var(--wood-900)' }}>
                  <th className="text-left p-3 text-white font-medium">Nome Cookie</th>
                  <th className="text-left p-3 text-white font-medium">Tipologia</th>
                  <th className="text-left p-3 text-white font-medium">Finalità</th>
                  <th className="text-left p-3 text-white font-medium">Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-wood-100">
                  <td className="p-3 text-wood-700 font-mono text-xs">agritur-maso-lena-cookie-consent</td>
                  <td className="p-3"><span className="bg-wood-100 text-wood-700 text-xs px-2 py-0.5 rounded">Tecnico</span></td>
                  <td className="p-3 text-wood-500 text-xs">Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l'esperienza di navigazione</td>
                  <td className="p-3 text-wood-500 text-xs">365 giorni</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 mb-10">
            <p className="text-yellow-800 text-sm">
              <strong>Nota importante:</strong> I cookie tecnici come "agritur-maso-lena-cookie-consent" sono essenziali per il funzionamento del sito e non richiedono il
              consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
            </p>
          </div>

          {/* 4. Come gestire */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">4. Come Gestire i Cookie</h2>
          <p className="text-wood-500 leading-relaxed mb-4">
            Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni
            del tuo browser.
          </p>
          <h3 className="font-medium text-wood-700 mb-3">Disabilitare i cookie tramite il browser:</h3>
          <ul className="list-disc list-inside text-wood-500 text-sm space-y-2 mb-5">
            <li><strong className="text-wood-700">Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
            <li><strong className="text-wood-700">Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
            <li><strong className="text-wood-700">Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
            <li><strong className="text-wood-700">Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci ed elimina cookie</li>
          </ul>
          <div className="border-l-4 border-red-400 bg-red-50 p-4 mb-10">
            <p className="text-red-700 text-sm">
              <strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la
              qualità dell'esperienza di navigazione.
            </p>
          </div>

          {/* 5. Link esterni */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">5. Link a Siti Esterni</h2>
          <p className="text-wood-500 leading-relaxed mb-10">
            Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o
            il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
          </p>

          {/* 6. Aggiornamenti */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">6. Aggiornamenti della Cookie Policy</h2>
          <p className="text-wood-500 leading-relaxed mb-3">
            Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate
            attraverso un avviso pubblicato su questa pagina.
          </p>
          <p className="text-wood-500 leading-relaxed mb-10">
            Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro
            sito.
          </p>

          {/* 7. Base normativa */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">7. Base Normativa</h2>
          <p className="text-wood-500 leading-relaxed mb-3">Questa Cookie Policy è redatta in conformità a:</p>
          <ul className="list-disc list-inside text-wood-500 text-sm space-y-2 mb-10">
            <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
            <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
            <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
            <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
          </ul>

          {/* 8. Contatti */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">8. Contatti</h2>
          <p className="text-wood-500 leading-relaxed mb-4">Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:</p>
          <div className="border border-wood-200 p-5 mb-10 space-y-2">
            <p className="font-medium text-wood-800">{SITE.legalName}</p>
            <p className="text-wood-500 text-sm">{ADDRESS.full}</p>
            <p className="text-wood-500 text-sm">Email: <a href={`mailto:${CONTACT.email}`} className="text-wood-700 underline">{CONTACT.email}</a></p>
            <p className="text-wood-500 text-sm">Tel: <a href={`tel:${CONTACT.phoneRaw}`} className="text-wood-700 underline">{CONTACT.phone}</a></p>
          </div>

          {/* Zero tracciamento badge */}
          <div className="text-center py-8 border-t border-wood-100">
            <ShieldCheck className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <p className="font-serif text-lg text-wood-800 mb-1">Zero Tracciamento</p>
            <p className="text-wood-400 text-sm">Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online.</p>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 mt-10">
          <Link to="/" className="flex-1 text-center py-3 border border-wood-300 text-wood-600 text-sm uppercase tracking-widest hover:bg-wood-100 transition-colors">
            Torna alla Home
          </Link>
          <Link to="/privacy-policy" className="flex-1 text-center py-3 border border-wood-300 text-wood-600 text-sm uppercase tracking-widest hover:bg-wood-100 transition-colors">
            Leggi la Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
