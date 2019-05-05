﻿using FluentSpecification.Common;
using FluentSpecification.Core.Composite;
using FluentSpecification.Tests.Mocks;
using Xunit;

namespace FluentSpecification.Tests.Api
{
    public partial class SpecificationTests
    {
        [Fact]
        public void InvokeCompositeGreaterThan_ReturnGreaterThanSpecification()
        {
            var comparer = new FakeIntComparer();
            var expected = new GreaterThanSpecification<int>(0, comparer);

            var sut = new MockCompositeSpecification<int>().GreaterThan(0, comparer);

            Assert.Equal(expected, sut, new SpecificationComparer());
        }

        [Fact]
        public void InvokeCompositeGreaterThanProperty_ReturnPropertySpecification()
        {
            var comparer = new FakeIntComparer();
            var expected = new PropertySpecification<FakeType, int>(
                ft => ft.First, new GreaterThanSpecification<int>(0, comparer));

            var sut = new MockCompositeSpecification<FakeType>().GreaterThan(
                ft => ft.First, 0, comparer);

            Assert.Equal(expected, sut, new SpecificationComparer());
        }

        [Fact]
        public void InvokeGreaterThan_ReturnGreaterThanSpecification()
        {
            var comparer = new FakeIntComparer();
            var expected = new GreaterThanSpecification<int>(0, comparer);

            var sut = Specification.GreaterThan(0, comparer);

            Assert.Equal(expected, sut, new SpecificationComparer());
        }

        [Fact]
        public void InvokeGreaterThanProperty_ReturnPropertySpecification()
        {
            var comparer = new FakeIntComparer();
            var expected = new PropertySpecification<FakeType, int>(
                ft => ft.First, new GreaterThanSpecification<int>(0, comparer));

            var sut = Specification.GreaterThan<FakeType, int>(
                ft => ft.First, 0, comparer);

            Assert.Equal(expected, sut, new SpecificationComparer());
        }
    }
}