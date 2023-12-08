// router-reuse-strategy.ts
import { ActivatedRouteSnapshot, BaseRouteReuseStrategy, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

interface RouteStorageObject {
  snapshot: ActivatedRouteSnapshot;
  handle: DetachedRouteHandle;
}

export class CustomReuseStrategy implements BaseRouteReuseStrategy {
  private routeStorage = new Map<string, RouteStorageObject>();

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // Decide whether to reuse the route based on your criteria
    return future.routeConfig === curr.routeConfig;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const key = route.routeConfig?.path;
    return key && this.routeStorage.has(key) ? this.routeStorage.get(key)!.handle : null;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const key = route.routeConfig?.path;
    return !!key && this.routeStorage.has(key);
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const key = route.routeConfig?.path;
    key && this.routeStorage.set(key, { snapshot: route, handle });
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  detach(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const key = route.routeConfig?.path;
    return !!key && this.routeStorage.has(key) ? this.routeStorage.get(key)!.handle : null;
  }
}
