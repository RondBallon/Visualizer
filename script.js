// Fonction pour exécuter et afficher le code en temps réel
const editor = document.getElementById('code-editor');
const preview = document.getElementById('preview');

// Fonction pour injecter le code dans le preview
function updatePreview() {
  const code = editor.value;

  // Créer un iframe pour afficher le code HTML/CSS/JS
  const iframe = document.createElement('iframe');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  
  // Injecter l'iframe dans le preview
  preview.innerHTML = '';  // Vider la zone de prévisualisation
  preview.appendChild(iframe);

  // Accéder au contenu de l'iframe pour ajouter le code
  const iframeDoc = iframe.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(code);
  iframeDoc.close();
}

// Met à jour la prévisualisation à chaque changement dans l'éditeur
editor.addEventListener('input', updatePreview);