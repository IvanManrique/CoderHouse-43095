const notificacionLegal = () => {
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    });
  };
  
  document.getElementById("legal").addEventListener("click", notificacionLegal);
  