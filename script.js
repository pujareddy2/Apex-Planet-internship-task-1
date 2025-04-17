function downloadResume() {
  // Replace 'resume.pdf' with your actual resume file name
  const link = document.createElement('a');
  link.href = 'resume.pdf';
  link.download = 'Puja-Midde-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

