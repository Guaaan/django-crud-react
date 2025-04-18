import {Link} from 'react-router-dom';

export function Navigation() {
      return (
            <div>
                  <Link to="/items">
                        <h1>Gestor de Items</h1>
                  </Link>
                  <Link to="/items-create">Create Item</Link>
            </div>
      );
}