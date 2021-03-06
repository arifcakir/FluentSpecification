﻿using System;
using FluentSpecification.Abstractions.Generic;
using FluentSpecification.Core.Composite;
using JetBrains.Annotations;

namespace FluentSpecification.Core.Utils
{
    /// <summary>
    ///     Used for composing <c>Specifications</c> by fluent API.
    ///     Join <c>Specifications</c> by logical OR. Second <c>Specifications</c> is negated.
    /// </summary>
    /// <typeparam name="T">Type of candidate to verify.</typeparam>
    internal sealed class OrNotFluentProxy<T> :
        ICompositeSpecification<T>
    {
        /// <summary>
        ///     Create Proxy object
        /// </summary>
        /// <param name="baseSpecification">"Left" <c>Specification</c>, ready for compose.</param>
        public OrNotFluentProxy([NotNull] ISpecification<T> baseSpecification)
        {
            BaseSpecification = baseSpecification ?? throw new ArgumentNullException(nameof(baseSpecification));
        }

        /// <inheritdoc />
        public ISpecification<T> BaseSpecification { get; }

        /// <inheritdoc />
        public IComplexSpecification<T> Compose(ISpecification<T> other)
        {
            return new OrSpecification<T>(BaseSpecification, other.Not());
        }
    }
}