﻿using FluentSpecification.Common;
using FluentSpecification.Core.Composite;
using FluentSpecification.Tests.Mocks;
using Xunit;

namespace FluentSpecification.Tests.Api
{
    public partial class SpecificationTests
    {
        [Fact]
        public void InvokeCompositeEqual_ReturnEqualSpecification()
        {
            var comparer = new FakeIntComparer();
            var expected = new EqualSpecification<int>(0, comparer);

            var sut = new MockCompositeSpecification<int>().Equal(0, comparer);

            Assert.Equal(expected, sut, new SpecificationComparer());
        }

        [Fact]
        public void InvokeCompositeEqualProperty_ReturnPropertySpecification()
        {
            var comparer = new FakeIntComparer();
            var expected = new PropertySpecification<FakeType, int>(
                ft => ft.First, new EqualSpecification<int>(0, comparer));

            var sut = new MockCompositeSpecification<FakeType>().Equal(
                ft => ft.First, 0, comparer);

            Assert.Equal(expected, sut, new SpecificationComparer());
        }

        [Fact]
        public void InvokeEqual_ReturnEqualSpecification()
        {
            var comparer = new FakeIntComparer();
            var expected = new EqualSpecification<int>(0, comparer);

            var sut = Specification.Equal(0, comparer);

            Assert.Equal(expected, sut, new SpecificationComparer());
        }

        [Fact]
        public void InvokeEqualProperty_ReturnPropertySpecification()
        {
            var comparer = new FakeIntComparer();
            var expected = new PropertySpecification<FakeType, int>(
                ft => ft.First, new EqualSpecification<int>(0, comparer));

            var sut = Specification.Equal<FakeType, int>(
                ft => ft.First, 0, comparer);

            Assert.Equal(expected, sut, new SpecificationComparer());
        }
    }
}