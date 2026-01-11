import React, { Component } from 'react';

/**
 * Error boundary specifically for consent-related components
 * Prevents consent system errors from breaking the entire app
 */
export default class ConsentErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Consent system error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Silently fail - don't break the site if consent system has issues
      return null;
    }

    return this.props.children;
  }
}

