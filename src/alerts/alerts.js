import Swal from "sweetalert2";

export const Toast = (message, icon) => {
  const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 4000,
    didOpen: (toast) => {
         toast.onmouseenter = Swal.stopTimer;
         toast.onmouseleave = Swal.resumeTimer;
    }
  });

  toast.fire({
    icon: icon,
    title: message,
  });
};


export const message = (values) => {
    let mensaje = "";
    for (const valuesKey in values) {
      // console.log(values[valuesKey])
      mensaje += values[valuesKey];
    }
    return mensaje;
};