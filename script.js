document.getElementById('generateInvoice').addEventListener('click', function() {
  const clientName = document.getElementById('clientName').value;
  const invoiceNumber = document.getElementById('invoiceNumber').value;
  const dateOfIssue = document.getElementById('dateOfIssue').value;
  const tripDescription = document.getElementById('tripDescription').value;
  const pax = document.getElementById('pax').value;
  const tcs = document.getElementById('tcs').value;
  const cgst = document.getElementById('cgst').value;
  const sgst = document.getElementById('sgst').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const stateCode = document.getElementById('stateCode').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const landPackageTotal = document.getElementById('landPackageTotal').value;
  const airPackageAmountPaid = document.getElementById('airPackageAmountPaid').value;
  const airPackageTotalCost = document.getElementById('airPackageTotalCost').value;
  const referenceNumber = document.getElementById('referenceNumber').value;
  const invoiceValueWords = document.getElementById('invoiceValueWords').value;

  const airPackageAmountYetToPay = airPackageTotalCost - airPackageAmountPaid;
  const formattedDate = new Date(dateOfIssue).toLocaleDateString('en-GB');

  const invoiceHTML = `
    <div class="container mx-auto bg-white px-36 shadow-lg rounded-lg">
      <div class="border border-black mt-10 mb-10 ">
        <div class="flex items-start p-4">
          <img src="/Users/akshayms/gotyolo-test/gotyolo/static/images/logobg.svg" class="w-30 h-10">
        </div>
        <div class="border border-black p-4 mx-12 mt-2">
          <div class="text-center ">
            <h3 class="text-lg font-bold">TAX INVOICE</h3>
          </div>
          <div class="grid grid-cols-2 gap-4 border-b border-black pb-4 mb-4 mt-4">
            <div>
              <h2 class="text-sm font-bold">GOTYOLO TECHNOLOGIES PVT. LTD.</h2>
              <p class="text-sm font-bold">PAN NO: AALCG3298A</p>
              <p>Place: Bengaluru</p>
              <p>State: Karnataka</p>
              <p>State Code: 07 </p>
            </div>
            <div class="text-right">
              <p>Invoice No: <span class="font-medium">${invoiceNumber}</span></p>
              <p>Date of Issue: <span class="font-medium">${formattedDate}</span></p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 class="text-medium font-bold">To: ${clientName}</h3>
              <p>City: ${city} </p>
              <p>State:${state} </p>
              <p>State Code: ${stateCode}</p>
              <p>Email id: ${email}</p>
              <p>Phone: ${phone}</p\>
            </div>
            <div class="text-right">
              <p>Payment Terms: On Receipt</p>
              <p>GST Rate: 5%</p>
              <p>Payment Mode: Online Transfer</p>
              <p>Reference No: <span class="font-medium">${referenceNumber}</span></p>
            </div>
          </div>
          <div class="border overflow-x-auto mb-6">
            <table class="min-w-full bg-white ">
              <thead>
                <tr class="bg-red-100 text-left">
                  <th class="border border-black p-2">Item Description</th>
                  <th class="border border-black p-2">PAX</th>
                  <th class="border border-black p-2">TCS 5%</th>
                  <th class="border border-black p-2">CGST 2.5%</th>
                  <th class="border border-black p-2">SGST 2.5%</th>
                  <th class="border border-black p-2">Land package</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-black p-2">${tripDescription}</td>
                  <td class="border border-black p-2 text-center">${pax}</td>
                  <td class="border border-black p-2 text-right"> ${tcs}</td>
                  <td class="border border-black p-2 text-right"> ${cgst}</td>
                  <td class="border border-black p-2 text-right"> ${sgst}</td>
                  <td class="border border-black p-2 text-right"> ${landPackageTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="border overflow-x-auto mb-6 w-full">
            <table class="min-w-full bg-white w-full">
              <thead>
                <tr class="bg-red-100 text-left">
                  <th class="border border-black p-2 w-1/5">Item Description</th>
                  <th class="border border-black p-2 w-1/10">PAX</th>
                  <th class="border border-black p-2 w-1/5">GST & TCS</th>
                  <th class="border border-black p-2 w-1/5">International Flights</th>
                  <th class="border border-black p-2 w-1/5">Domestic Flights</th>
                  <th class="border border-black p-2 w-1/5">Total Flight Package</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-black p-2">Flight charges</td>
                  <td class="border border-black p-2 text-center">1</td>
                  <td class="border border-black p-2 text-right">Nil</td>
                  <td class="border border-black p-2 text-right"> 63,200.00</td>
                  <td class="border border-black p-2 text-right">Nil</td>
                  <td class="border border-black p-2 text-right"> 63,200.00</td>
                </tr>
                <tr class="font-bold">
                  <td colspan="4" class="text-right p-2"></td>
                  <td class="border border-black p-2 text-right">Amount Paid</td>
                  <td class="border border-black p-2 text-right"> 155,482.00</td>
                </tr>
                <tr class="font-bold">
                  <td colspan="4" class="text-right p-2"></td>
                  <td class="border border-black p-2 text-right">Total Cost</td>
                  <td class="border border-black p-2 text-right"> 255,743.00</td>
                </tr>
                <tr class="font-bold">
                  <td colspan="4" class="text-right p-2"></td>
                  <td class="border border-black p-2 text-right">Amount Yet to Pay</td>
                  <td class="border border-black p-2 text-right"> 100,261.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="grid grid-cols-2 divide-x divide-black gap-8 mt-6">
            <div>
              <p>Invoice Value in Words: <span class="font-semibold">${invoiceValueWords}</span></p>
              <p class="mt-2">Amount of Tax Subject to Reverse Charges: <span class="font-semibold">No</span></p>
              <div class="border border-black mt-4 text-sm">
                <div class="flex border-b border-black">
                  <div class="w-full px-2 py-1">Account Name:</div>
                  <div class="w-full px-2 py-1">GOTYOLO TECHNOLOGIES PRIVATE LIMITED</div>
                </div>
                <div class="flex border-b border-black">
                  <div class="w-full px-2 py-1">Current A/c. No.:</div>
                  <div class="w-full px-2 py-1">040105007515</div>
                </div>
                <div class="flex border-b border-black">
                  <div class="w-full px-2 py-1">Bank Name:</div>
                  <div class="w-full px-2 py-1">ICICI Bank Limited</div>
                </div>
                <div class="flex border-b border-black">
                  <div class="w-full px-2 py-1">Bank Address:</div>
                  <div class="w-full px-2 py-1">JP Nagar Branch, Bangalore</div>
                </div>
                <div class="flex">
                  <div class="w-full px-2 py-1">IFSC Code:</div>
                  <div class="w-full px-2 py-1">ICIC0000401</div>
                </div>
              </div>
            </div>
            <div class="text-right">
              <p class="font-bold text-center">Authorized Signatory:</p>
              <div class="mt-10">
                <img src="/Users/akshayms/Downloads/WhatsApp Image 2025-03-13 at 6.05.20 PM.jpeg" class="w-80 h-40 mx-auto">
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 text-xs p-4">
          <div>
            <p>GOTYOLO TECHNOLOGIES PVT. LTD</p>
            <p>CIN: U52291KA2024PTC190000</p>
          </div>
          <div class=" text-center">
            <p>95913 61361 | hello@gotyolo.com</p>
            <p>www.gotyolo.com</p>
          </div>
          <div class="text-right">
            <p>#35, 3rd Main, 2nd Crossroad,</p>
            <p>Narayana Nagara 1st Block</p>
            <p>Kanakapura Road, Bangalore 560062</p>
          </div>
        </div>
        <div class="w-full h-2 bg-gradient-to-r from-red-500 to-black"></div>
      </div>
    </div>
  `;

  // Store data in localStorage
  localStorage.setItem('invoiceHTML', invoiceHTML);

  // Open invoice.html in a new tab
  window.open('invoice.html', '_blank');
});
