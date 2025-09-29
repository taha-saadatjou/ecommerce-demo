'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Package, Truck, Mail, ArrowRight } from 'lucide-react';

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'DEMO123456';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Success Header */}
      <div className="text-center mb-12">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-2">
          Thank you for your order. Your payment has been processed successfully.
        </p>
        <p className="text-sm text-gray-500">
          Order ID: <span className="font-mono font-semibold">{orderId}</span>
        </p>
      </div>

      {/* Demo Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-yellow-600 font-bold">!</span>
            </div>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-yellow-800">Demo Order Confirmation</h3>
            <p className="text-yellow-700 mt-1">
              This is a demonstration website. No actual payment was processed and no real order was placed. 
              This confirmation page is for testing purposes only.
            </p>
          </div>
        </div>
      </div>

      {/* Order Timeline */}
      <div className="bg-white border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">Order Timeline</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Order Confirmed</p>
              <p className="text-sm text-gray-500">Your order has been received and confirmed</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Package className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Processing</p>
              <p className="text-sm text-gray-500">Your order is being prepared for shipment</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4">
              <Truck className="h-5 w-5 text-gray-400" />
            </div>
            <div>
              <p className="font-medium text-gray-500">Shipped</p>
              <p className="text-sm text-gray-400">Your order will be shipped within 1-2 business days</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4">
              <CheckCircle className="h-5 w-5 text-gray-400" />
            </div>
            <div>
              <p className="font-medium text-gray-500">Delivered</p>
              <p className="text-sm text-gray-400">Estimated delivery: 3-5 business days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details */}
      <div className="bg-white border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">Order Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Shipping Address</h3>
            <div className="text-gray-600">
              <p>John Doe</p>
              <p>123 Demo Street</p>
              <p>Demo City, DC 12345</p>
              <p>United States</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Payment Method</h3>
            <div className="text-gray-600">
              <p>Credit Card ending in ****</p>
              <p>Demo Payment (No actual charge)</p>
            </div>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
        <div className="space-y-3">
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Email Confirmation</p>
              <p className="text-sm text-gray-600">
                You'll receive an email confirmation shortly (demo only)
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Package className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Order Processing</p>
              <p className="text-sm text-gray-600">
                Your order will be processed within 1-2 business days
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Truck className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Shipping Updates</p>
              <p className="text-sm text-gray-600">
                You'll receive tracking information once your order ships
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          Continue Shopping
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Link
          href="/account"
          className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
        >
          View Order History
        </Link>
      </div>

      {/* Support Information */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Need help with your order? We're here to assist you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
          <a href="mailto:support@shopdemo.com" className="text-blue-600 hover:text-blue-700">
            support@shopdemo.com
          </a>
          <span className="hidden sm:inline text-gray-400">•</span>
          <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-700">
            (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  );
}
