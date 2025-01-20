import { Box, Typography } from '@mui/material';
import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Actualiza el estado para renderizar la UI de respaldo
    return { hasError: true, error: error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Loguea el error (puedes enviarlo a un servicio de reporte de errores)
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // Renderiza una UI de respaldo si ocurre un error
      return (
        <Box
          height={'100vh'}
          bgcolor={'#59a5d1'}
        >
          <Typography> Error </Typography>
        </Box>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;