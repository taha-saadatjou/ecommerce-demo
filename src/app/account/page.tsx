'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Package, Heart, Settings, LogOut, Edit, MapPin, CreditCard } from 'lucide-react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'orders', name: 'Orders', icon: Package },
    { id: 'wishlist', name: 'Wishlist', icon: Heart },
    { id: 'addresses', name: 'Addresses', icon: MapPin },
    { id: 'payment', name: 'Payment', icon: CreditCard },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 299.99,
      items: 3
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 149.99,
      items: 1
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'Processing',
      total: 89.99,
      items: 2
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </button>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <p className="text-gray-900">John</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <p className="text-gray-900">Doe</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <p className="text-gray-900">john.doe@example.com</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <p className="text-gray-900">+1 (555) 123-4567</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                  <p className="text-gray-900">January 2024</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Order History</h2>
            
            <div className="space-y-4">
              {mockOrders.map((order) => (
                <div key={order.id} className="bg-white border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                      <p className="text-sm text-gray-500">Placed on {order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${order.total}</p>
                      <p className="text-sm text-gray-500">{order.items} item(s)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                    <Link
                      href={`/order/${order.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'wishlist':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Wishlist</h2>
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Your wishlist is empty</p>
              <p className="text-gray-400">Start adding items you love!</p>
            </div>
          </div>
        );

      case 'addresses':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Saved Addresses</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Add Address
              </button>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Default Address</h3>
              <p className="text-gray-600">
                123 Demo Street<br />
                Demo City, DC 12345<br />
                United States
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="text-blue-600 hover:text-blue-700 text-sm">Edit</button>
                <button className="text-red-600 hover:text-red-700 text-sm">Delete</button>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Add Payment Method
              </button>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Credit Card</h3>
              <p className="text-gray-600">**** **** **** 1234</p>
              <p className="text-sm text-gray-500">Expires 12/25</p>
              <div className="mt-4 flex space-x-4">
                <button className="text-blue-600 hover:text-blue-700 text-sm">Edit</button>
                <button className="text-red-600 hover:text-red-700 text-sm">Remove</button>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
            
            <div className="bg-white border rounded-lg p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Notifications</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" defaultChecked />
                    <span className="text-gray-700">Email notifications</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-gray-700">SMS notifications</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" defaultChecked />
                    <span className="text-gray-700">Marketing emails</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Privacy</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" defaultChecked />
                    <span className="text-gray-700">Profile visibility</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-gray-700">Data sharing</span>
                  </label>
                </div>
              </div>
              
              <div className="pt-6 border-t">
                <button className="flex items-center text-red-600 hover:text-red-700">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
