Description: Checks if candidate is True.
Order: 200
DisplayDescription: true
Support: Full;Full;Full;Full
ValidationError: <i>"Value is False"</i>.;<i>"Value is True"</i> - for negation.
---

# Usage

```csharp
var spec = Specification.True();

spec.IsSatisfiedBy(true); // true
spec.IsSatisfiedBy(false);  // false
```

## As property

```csharp
var customerSpec = Specification.True<Customer>(c => c.IsActive);

customerSpec.IsSatisfiedBy(new Customer { IsActive = true }); // true
customerSpec.IsSatisfiedBy(new Customer { IsActive = false }); // false
```