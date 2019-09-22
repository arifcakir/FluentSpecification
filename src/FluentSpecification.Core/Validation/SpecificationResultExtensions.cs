﻿using System.Collections.Generic;
using System.Linq;
using FluentSpecification.Abstractions.Validation;
using JetBrains.Annotations;

namespace FluentSpecification.Core.Validation
{
    [PublicAPI]
    public static class SpecificationResultExtensions
    {
        [PublicAPI]
        [NotNull]
        public static SpecificationResult Merge([CanBeNull] this SpecificationResult self,
            bool overall, SpecificationTrace finalTrace,
            [ItemCanBeNull] params SpecificationResult[] others)
        {
            if (self == null && (others == null || others.Length == 0))
                return null;

            var totalSpecificationsCount = self?.TotalSpecificationsCount ?? 0;
            var specifications = self?.Specifications.ToList() ?? new List<SpecificationInfo>();
            foreach (var res in others)
            {
                if (res != null)
                {
                    totalSpecificationsCount += res.TotalSpecificationsCount;
                    specifications.AddRange(res.Specifications);
                }
            }

            var mergeResult = new SpecificationResult(
                totalSpecificationsCount,
                overall,
                finalTrace,
                specifications.ToArray());

            return mergeResult;
        }
    }
}