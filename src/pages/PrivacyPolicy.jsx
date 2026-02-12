import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Phone, Mail } from 'lucide-react'
import { SITE, CONTACT, ADDRESS, LEGAL } from '../constants/siteData'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream-100)' }}>
      {/* Header */}
      <div style={{ background: 'var(--wood-900)' }} className="pt-28 pb-12 px-5 md:px-10 lg:px-16">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest mb-6">
          <ArrowLeft className="w-3.5 h-3.5" /> Torna alla Home
        </Link>
        <h1 className="font-serif fluid-h2 text-white">Privacy Policy</h1>
        <p className="text-white/50 text-sm mt-2">Informativa sul trattamento dei dati personali</p>
      </div>

      {/* Content */}
      <div className="px-5 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-14 shadow-sm">
          <p className="text-wood-400 text-xs mb-10">Ultimo aggiornamento: {LEGAL.lastUpdate}</p>

          {/* 1. Titolare */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">1. Titolare del Trattamento</h2>
          <p className="text-wood-500 leading-relaxed mb-4">Il Titolare del trattamento dei dati personali è:</p>
          <div className="border border-wood-200 p-5 mb-10 space-y-2">
            <p className="font-medium text-wood-800">{SITE.legalName}</p>
            <p className="text-wood-500 text-sm flex items-start gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5 text-wood-400" />{ADDRESS.full}</p>
            <p className="text-wood-500 text-sm flex items-center gap-2"><Phone className="w-4 h-4 shrink-0 text-wood-400" />{CONTACT.phone}</p>
            <p className="text-wood-500 text-sm flex items-center gap-2"><Mail className="w-4 h-4 shrink-0 text-wood-400" />{CONTACT.email}</p>
            <p className="text-wood-500 text-sm">P.IVA {LEGAL.vatId}</p>
          </div>

          {/* 2. Dati Raccolti */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">2. Dati Raccolti e Finalità del Trattamento</h2>
          <h3 className="font-medium text-wood-700 mb-3">2.1 Dati forniti volontariamente dall'utente</h3>
          <p className="text-wood-500 leading-relaxed mb-3">Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:</p>
          <ul className="list-disc list-inside text-wood-500 text-sm space-y-1 mb-5">
            <li><strong className="text-wood-700">Nome e Cognome</strong> — per identificare l'interessato</li>
            <li><strong className="text-wood-700">Indirizzo Email</strong> — per rispondere alle richieste</li>
            <li><strong className="text-wood-700">Numero di Telefono</strong> (facoltativo) — per contatti telefonici</li>
            <li><strong className="text-wood-700">Messaggio/Descrizione del Progetto</strong> — per comprendere le esigenze</li>
          </ul>
          <div className="border-l-4 border-wood-400 bg-wood-50 p-4 mb-5">
            <p className="text-wood-600 text-sm font-medium mb-2">Finalità: I dati vengono raccolti esclusivamente per:</p>
            <ul className="list-disc list-inside text-wood-500 text-sm space-y-1">
              <li>Rispondere alle richieste di prenotazione</li>
              <li>Fornire informazioni sui nostri servizi</li>
              <li>Organizzare soggiorni e consultazioni</li>
              <li>Gestire la relazione commerciale</li>
            </ul>
          </div>

          <h3 className="font-medium text-wood-700 mb-3">2.2 Base giuridica del trattamento</h3>
          <p className="text-wood-500 leading-relaxed mb-10">
            Il trattamento è basato sul <strong className="text-wood-700">consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso
            l'invio del modulo di contatto, e sulla <strong className="text-wood-700">esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
          </p>

          {/* 3. Modalità */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">3. Modalità di Trattamento</h2>
          <p className="text-wood-500 leading-relaxed mb-3">
            I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle
            finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
          </p>
          <p className="text-wood-500 leading-relaxed mb-10">
            Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non
            autorizzati, perdita, distruzione o divulgazione.
          </p>

          {/* 4. Conservazione */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">4. Conservazione dei Dati</h2>
          <p className="text-wood-500 leading-relaxed mb-3">
            I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le
            relazioni commerciali conseguenti.
          </p>
          <ul className="list-disc list-inside text-wood-500 text-sm space-y-2 mb-10">
            <li><strong className="text-wood-700">Richieste di preventivo:</strong> I dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
            <li><strong className="text-wood-700">Rapporti contrattuali:</strong> I dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
            <li><strong className="text-wood-700">Richieste di informazioni:</strong> I dati vengono conservati per 12 mesi dalla risposta</li>
          </ul>

          {/* 5. Comunicazione */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">5. Comunicazione e Diffusione dei Dati</h2>
          <p className="text-wood-500 leading-relaxed mb-3">I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:</p>
          <ul className="list-disc list-inside text-wood-500 text-sm space-y-1 mb-5">
            <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
            <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
            <li>Autorità competenti in caso di richieste legittime previste per legge</li>
          </ul>
          <div className="border-l-4 border-red-400 bg-red-50 p-4 mb-10">
            <p className="text-red-700 text-sm font-medium mb-2">I tuoi dati NON verranno MAI:</p>
            <ul className="list-disc list-inside text-red-600 text-sm space-y-1">
              <li>Venduti a terze parti</li>
              <li>Condivisi con società di marketing</li>
              <li>Utilizzati per invio di newsletter non richieste</li>
              <li>Trasferiti fuori dall'Unione Europea</li>
            </ul>
          </div>

          {/* 6. Diritti */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">6. Diritti dell'Interessato</h2>
          <p className="text-wood-500 leading-relaxed mb-3">In qualità di interessato, hai il diritto di:</p>
          <ul className="list-disc list-inside text-wood-500 text-sm space-y-2 mb-5">
            <li><strong className="text-wood-700">Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
            <li><strong className="text-wood-700">Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
            <li><strong className="text-wood-700">Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
            <li><strong className="text-wood-700">Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
            <li><strong className="text-wood-700">Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
            <li><strong className="text-wood-700">Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
            <li><strong className="text-wood-700">Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
          </ul>
          <div className="border border-wood-300 bg-wood-50 p-4 mb-10">
            <p className="text-wood-700 text-sm font-medium mb-2">Come esercitare i tuoi diritti:</p>
            <p className="text-wood-500 text-sm">
              Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${CONTACT.email}`} className="text-wood-700 underline">{CONTACT.email}</a> o tramite raccomandata A/R
              all'indirizzo: {ADDRESS.full}.
            </p>
            <p className="text-wood-500 text-sm mt-1">Risponderemo entro <strong className="text-wood-700">30 giorni</strong> dalla ricezione della richiesta.</p>
          </div>

          {/* 7. Reclamo */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">7. Diritto di Reclamo</h2>
          <p className="text-wood-500 leading-relaxed mb-4">
            Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il
            trattamento dei tuoi dati violi il GDPR.
          </p>
          <div className="border border-wood-200 bg-wood-50 p-4 mb-10">
            <p className="text-wood-700 text-sm font-medium mb-2">Garante per la protezione dei dati personali:</p>
            <p className="text-wood-500 text-sm">Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-wood-700 underline">www.garanteprivacy.it</a></p>
            <p className="text-wood-500 text-sm">Email: garante@gpdp.it</p>
            <p className="text-wood-500 text-sm">PEC: protocollo@pec.gpdp.it</p>
          </div>

          {/* 8. Cookie */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">8. Cookie e Tecnologie di Tracciamento</h2>
          <p className="text-wood-500 leading-relaxed mb-10">
            Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni,
            consulta la nostra <Link to="/cookie-policy" className="text-wood-700 underline">Cookie Policy</Link>.
          </p>

          {/* 9. Modifiche */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">9. Modifiche alla Privacy Policy</h2>
          <p className="text-wood-500 leading-relaxed mb-10">
            Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche
            saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a
            consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
          </p>

          {/* 10. Contatti */}
          <h2 className="font-serif text-xl text-wood-800 mb-4">10. Contatti</h2>
          <p className="text-wood-500 leading-relaxed mb-4">Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:</p>
          <div className="border border-wood-200 p-5 mb-10 space-y-2">
            <p className="text-wood-500 text-sm flex items-center gap-2"><Mail className="w-4 h-4 text-wood-400" /> <a href={`mailto:${CONTACT.email}`} className="text-wood-700 underline">{CONTACT.email}</a></p>
            <p className="text-wood-500 text-sm flex items-center gap-2"><Phone className="w-4 h-4 text-wood-400" /> <a href={`tel:${CONTACT.phoneRaw}`} className="text-wood-700 underline">{CONTACT.phone}</a></p>
          </div>

          <p className="text-wood-400 text-xs text-center border-t border-wood-100 pt-6">
            Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
          </p>
        </div>

        {/* Bottom navigation */}
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 mt-10">
          <Link to="/" className="flex-1 text-center py-3 border border-wood-300 text-wood-600 text-sm uppercase tracking-widest hover:bg-wood-100 transition-colors">
            Torna alla Home
          </Link>
          <Link to="/cookie-policy" className="flex-1 text-center py-3 border border-wood-300 text-wood-600 text-sm uppercase tracking-widest hover:bg-wood-100 transition-colors">
            Leggi la Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
