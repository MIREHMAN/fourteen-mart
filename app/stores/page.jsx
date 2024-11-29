import StoresCard from '../components/StoresCard/StoresCard';

function stores() {
  const stores = [
    {
      id: 1,
      name: 'Store 1',
      description: 'This is a sample store.',
      address: '123 Main St, Anytown, USA',
      phone: '555-555-5555',
      email: 'store1@example.com',
      rating: 4.5,
      reviews: 100,
      products: 500,
    },
    {
      id: 2,
      name: 'Store 2',
      description: 'This is another sample store.',
      address: '456 Elm St, Othertown, USA',
      phone: '555-555-5556',
      email: 'store2@example.com',
      rating: 4.2,
      reviews: 50,
      products: 200,
    },
    // Add more stores here...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Stores</h1>
      <div className="flex flex-wrap justify-center mb-4">
        {stores.map((store) => (
          <StoresCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
}

export default stores;