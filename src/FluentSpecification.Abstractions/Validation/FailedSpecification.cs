﻿using System;
using System.Collections.Generic;
using FluentSpecification.Abstractions.Generic;
using JetBrains.Annotations;

namespace FluentSpecification.Abstractions.Validation
{
    /// <summary>
    ///     Contains flatten information about failed <c>Specification</c> in <see cref="SpecificationResult" />.
    ///     All composed <c>Specifications</c> must be split into separate <c>FailedSpecification</c> objects.
    /// </summary>
    /// <remarks>
    ///     <para>
    ///         Normally <c>FailedSpecification</c> means NOT satisfied <see cref="ISpecification{T}" />
    ///         or satisfied <see cref="INegatableSpecification{T}" />
    ///     </para>
    /// </remarks>
    [PublicAPI]
    public class FailedSpecification
    {
        /// <summary>
        ///     Create standard <c>FailedSpecification</c> object.
        /// </summary>
        /// <param name="specificationType">Type of failed <c>Specification</c>.</param>
        /// <param name="candidate">Used candidate.</param>
        /// <param name="errors">Errors generated by <c>Specification</c>.</param>
        [PublicAPI]
        public FailedSpecification([NotNull] Type specificationType, [CanBeNull] object candidate,
            [CanBeNull] params string[] errors) :
            this(specificationType, null, candidate, errors)
        {
        }

        /// <summary>
        ///     Create complex <c>FailedSpecification</c> object.
        /// </summary>
        /// <param name="specificationType">Type of failed <c>Specification</c>.</param>
        /// <param name="parameters"><c>Specification</c> parameters used during <paramref name="candidate" /> verification.</param>
        /// <param name="candidate">Used candidate.</param>
        /// <param name="errors">Errors generated by <c>Specification</c>.</param>
        [PublicAPI]
        public FailedSpecification([NotNull] Type specificationType,
            [CanBeNull] IReadOnlyDictionary<string, object> parameters,
            [CanBeNull] object candidate, [CanBeNull] params string[] errors)
        {
            SpecificationType = specificationType;
            Parameters = parameters ?? new Dictionary<string, object>();
            Candidate = candidate;
            Errors = errors ?? new string[0];
        }

        /// <summary>
        ///     Type of failed <c>Specification</c>.
        /// </summary>
        [PublicAPI]
        [NotNull]
        public Type SpecificationType { get; }

        /// <summary>
        ///     <c>Specification</c> parameters used during candidate verification.
        /// </summary>
        [PublicAPI]
        [NotNull]
        public IReadOnlyDictionary<string, object> Parameters { get; }

        /// <summary>
        ///     Used candidate.
        /// </summary>
        [PublicAPI]
        [CanBeNull]
        public object Candidate { get; }

        /// <summary>
        ///     Errors generated by <c>Specification</c>.
        /// </summary>
        [PublicAPI]
        [NotNull]
        public IReadOnlyList<string> Errors { get; }
    }
}