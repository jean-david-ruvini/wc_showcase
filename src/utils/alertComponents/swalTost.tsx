import Swal from 'sweetalert2';

export const showToast = (type: string, message: any) => {
	Swal.close();
	const icon = type === 'success' ? 'success' : 'error';

	Swal.fire({
		icon: icon,
		text: message,
		position: 'top',
		toast: true,
		timer: 3000,
		showConfirmButton: false,
	});
};
