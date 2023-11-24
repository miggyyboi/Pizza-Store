import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder() {
  // update priority
  const fetcher = useFetcher();
  const isLoading = fetcher.state === 'loading';
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">
        {!isLoading ? 'Make priority' : 'Processing request'}
      </Button>
    </fetcher.Form>
  );
}

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}

export default UpdateOrder;
