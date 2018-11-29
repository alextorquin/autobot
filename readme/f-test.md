# f - Testing

Tutorial avanzado de programación con Angular

## Testing

### Structure

* describe('')
  * beforeEach()
  * it('')
    * expect(tested).toBe(expected);

it xit fit

### Before Each

```typescript
TestBed.configureTestingModule({ module });
let fixture: ComponentFixture<TheComponent> = TestBed.createComponent(TheComponent);
let component: TheComponent = fixture.componentInstance;
```

### Debug Element

```typescript
let componentElement: DebugElement = fixture.debugElement;
let oneElement: DebugElement = query(By.css(''));
let oneNativeElement: any = oneElement.nativeElement;
const content = oneNativeElement.textContent;
const innerHtml = oneNativeElement.innerHTML;
oneNativeElement.value = '';
oneNativeElement.click();
oneElement.triggerEventHandler('click', null);
fixture.detectChanges();
```

### Fake Providers

```json
providers:[
  {
    provide: TheService,
    useValue: oneFakeService
  },
  {
    provide: OtherService,
    useClass: OtherFakeService
  }
]
```

### Spy On

```typescript
let spy: jasmine.Spy = spyOn(component, 'methodName');
expect(spy.calls.count).toBe(1);
expect(spy).toHaveBeenCalled();
spyOn(component, 'methodName').and.returnValue(1);
```

### Router

```json
providers:[
  { provide: APP_BASE_HREF, useValue: "/" }
]
RouterModule.forRoot([]);
```

```typescript
fakeAsync(() => {
	router.navigate(['section', 1]);
	tick();
	expect(location.path()).toBe('/section/1');
});
```

### @Input @Output

```typescript
component.inputProperty = 1;
component.outputEvent.subscribe(value => {});
```

### Http

```typescript
beforeEach(() => {
	TestBed.configureTestingModule({
		imports: [HttpClientTestingModule],
		providers: [TheService]
	});
});
afterEach(
	inject(
		[HttpTestingController],
		(backend: HttpTestingController) => {
			backend.verify();
		}
	)
);
it('', async(inject([], () => {})));
```
