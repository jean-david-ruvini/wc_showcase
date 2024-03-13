import { Box, CircularProgress } from '@mui/material';
import React from 'react';

interface LoadingProps {
	loading: boolean;
}
const Loaders = ({ loading = false }: LoadingProps) => {
	return loading ? (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'rgba(0, 0, 0, 0.4)',
				zIndex: '999',
			}}
		>
			<Box sx={{ display: 'flex' }}>
				<CircularProgress />
			</Box>
		</div>
	) : null;
};

export default Loaders;
