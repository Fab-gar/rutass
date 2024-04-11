import{ getInvoices } from '../data/invoices.js';
import { Link } from 'react-router-dom';

export default  function Invoices() {
  let invoices = getInvoices();  
return(
    <section style={{ padding:'1rem 0'  }}>
        <nav style={{}}>
            {invoices.map((invoice) => (
                <Link to={'invoices/${invoice.number}'}>{invoice.name}</Link>
            ))}
        </nav>
    </section>
)
};
