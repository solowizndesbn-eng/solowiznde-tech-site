
// Simple client-side functionality for the static site
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value || 'No name');
  const email = encodeURIComponent(document.getElementById('email').value || 'solowizndesbn@gmail.com');
  const message = encodeURIComponent(document.getElementById('message').value || 'No message');
  const subject = encodeURIComponent('Website project request for Solowiznde Tech');
  const body = encodeURIComponent('Name: ') + name + '%0A' + encodeURIComponent('Email: ') + email + '%0A%0A' + message;
  // Use mailto to open user's email client
  window.location.href = `mailto:solowizndesbn@gmail.com?subject=${subject}&body=${body}`;
});

document.getElementById('downloadVcard').addEventListener('click', function() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Solowiznde Tech',
    'ORG:Solowiznde Tech',
    'TEL;TYPE=CELL:07035330698',
    'TEL;TYPE=WORK:07035330699',
    'EMAIL;TYPE=INTERNET:solowizndesbn@gmail.com',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcard], {type: 'text/vcard'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Solowiznde Tech.vcf';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

document.getElementById('copyPhone').addEventListener('click', function() {
  navigator.clipboard?.writeText('07035330698').then(()=>{
    alert('Phone number 07035330698 copied to clipboard.');
  }).catch(()=>{
    alert('Copy failed — please select and copy the number manually: 07035330698');
  });
});
