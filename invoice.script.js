window.onload = function() {
  console.log('invoice_script.js is running!');
  const invoiceHTML = localStorage.getItem('invoiceHTML');
  if (invoiceHTML) {
    document.getElementById('invoiceContent').innerHTML = invoiceHTML;
    // Clear localStorage after displaying the invoice (optional)
    localStorage.removeItem('invoiceHTML');
  } else {
    document.getElementById('invoiceContent').innerHTML = '<p>Invoice data not found.</p>';
  }
};