import type { ErrorBoundaryProps, ErrorBoundaryState } from '@/types'
import { Component, ErrorInfo } from 'react'

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  override state: ErrorBoundaryState = {
    hasError: false
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button type="button" onClick={() => this.setState({ hasError: false })}>
            Try again?
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
